import React from "react"

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

export const onRenderBody = ({ setPostBodyComponents }) => {
  let scripts = []

  const intercomEnabled = process.env.INTERCOM_ENABLED === "true"
  if (process.env.NODE_ENV === `production` && intercomEnabled) {
    const appId = process.env.INTERCOM_APP_ID

    scripts.push(
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.intercomSettings = { app_id: '${appId}', landing_page_management: true, vertical_padding: 90, horizontal_padding: 20, alignment: 'right' };
        (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${appId}' ;var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
      `,
        }}
      />
    )
  }

  return setPostBodyComponents(scripts)
}
