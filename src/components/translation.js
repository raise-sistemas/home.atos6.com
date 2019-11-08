import languages from "../locales/languages"

const { langs } = languages

if (!Intl.PluralRules) {
  require("@formatjs/intl-pluralrules/polyfill")
}

if (!Intl.RelativeTimeFormat) {
  require("@formatjs/intl-relativetimeformat/polyfill")
}

const jsonLocales = {}

langs.forEach(lang => {
  if (!Intl.PluralRules) {
    require(`@formatjs/intl-pluralrules/dist/locale-data/${lang}`)
  }

  if (!Intl.RelativeTimeFormat) {
    require(`@formatjs/intl-relativetimeformat/dist/locale-data/${lang}`)
  }

  jsonLocales[lang] = require(`../locales/${lang}.json`)
})

export const messages = jsonLocales
