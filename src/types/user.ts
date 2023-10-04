import { DESKTOP, MOBILE } from "@assets/constant/string";
import { localeMap } from "locales";

export type Device = typeof DESKTOP | typeof MOBILE;
export type LocaleMap = Partial<typeof localeMap>;
export type Locale = keyof LocaleMap;
