import React, { useState } from "react"
import PropTypes from "prop-types"
import { injectIntl } from "react-intl"
import { Link } from "gatsby"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

const FeatureAccordion = ({
  intl,
  markAsNew,
  imageOnLeft,
  className,
  items,
}) => {
  const [accordionItemSelected, setAccordionItemSelected] = useState(
    items[0].path
  )

  const accordionItems = () =>
    items.map((item, index) => (
      <AccordionItem
        key={index}
        uuid={item.path}
        className={
          accordionItemSelected === item.path
            ? "accordion__item selected"
            : "accordion__item"
        }
      >
        <AccordionItemHeading>
          <AccordionItemButton>
            {item.name}{" "}
            {markAsNew === item.path ? (
              <span className="new">{intl.formatMessage({ id: "new" })}</span>
            ) : (
              ""
            )}
          </AccordionItemButton>
        </AccordionItemHeading>

        <AccordionItemPanel>
          <span>{item.description}</span>

          <Link to={item.path} className="know-more">
            {intl.formatMessage({ id: "know-more" })} <b>&#10230;</b>
          </Link>
        </AccordionItemPanel>
      </AccordionItem>
    ))

  const accordion = (
    <Accordion
      className="feature-accordion"
      preExpanded={[items[0].path]}
      onChange={expanded => setAccordionItemSelected(expanded[0])}
    >
      {accordionItems()}
    </Accordion>
  )

  const accordionArrangement = () => {
    const selectedItem = items.find(item => item.path === accordionItemSelected)
    const image = (
      <img
        src={selectedItem.image}
        alt={selectedItem.name}
        className="feature-image"
      />
    )

    if (imageOnLeft) {
      return (
        <div className={`feature-accordion-description ${className}`}>
          <div className="column">{image}</div>

          <div className="column">{accordion}</div>
        </div>
      )
    }

    return (
      <div className={`feature-accordion-description ${className}`}>
        <div className="column">{accordion}</div>

        <div className="column">{image}</div>
      </div>
    )
  }

  return accordionArrangement()
}

FeatureAccordion.propTypes = {
  imageOnLeft: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  className: PropTypes.string.isRequired,
}

FeatureAccordion.defaultProps = {
  imageOnLeft: false,
  className: "",
}

export default injectIntl(FeatureAccordion)
