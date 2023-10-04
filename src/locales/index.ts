import ko from "locales/ko.json";
import template from "locales/template.json";
import { ReactComponent as KoKrSvg } from "assets/img/ko_KR.svg";

import type { Locale } from "types/user";
import _ from "lodash";

export const flattenMessages = (nestedMessages: any, prefix = "") => {
  if (nestedMessages === null) {
    return {};
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      Object.assign(messages, { [prefixedKey]: value });
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
};
export const local_KR = "ko_KR";
export const localeMap = {
  ko_KR: {
    label: "한국어",
    SvgComponent: KoKrSvg,
    intlLocale: ko,
  },
};

export const getIntlLocale = (locale: Locale) =>
  _.get(localeMap, [locale, "intlLocale"]);
export const getPrefixLocale = (locale: Locale) =>
  _.flow([_.split, _.head])(
    _.find(_.keys(localeMap), (key) => key === locale),
    "_"
  );
