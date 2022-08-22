import React from "react";
import { Admin, Resource, resolveBrowserLocale } from "react-admin";
import polyglotI18nProvider from "ra-i18n-polyglot";
import fakeDataProvider from "ra-data-fakerest";
import { EmployeeList, EmployeeShow, EmployeeEdit, EmployeeCreate } from "./employee";
import englishMessages from "ra-language-english";
import russianMessages from "ra-language-russian";
import spanishMessages from "ra-language-spanish";
import chineseMessages from "ra-language-chinese";
import {i18n as domainMessages} from "./build-watch";

const App = () => {
  const dataProvider = fakeDataProvider({
    employees: [
      { id: 1, title: "hpotter", fullName: "Harry Potter", salary: 1234.00 },
      { id: 2, title: "rwesley", fullName: "Ron Weasley", salary: 19234.50 },
      { id: 3, title: "ssnape", fullName: "Severus Snape", salary: 4000.0 },
      { id: 4, title: "rhagrid", fullName: "Rubeus Hagrid", salary: 3999.999 },
      { id: 5, title: "voldemort", fullName: "Lord Voldemort", salary: 523.4 },
    ],
  });

  // Setup i18n
  const messages = {
    en: { ...englishMessages, ...domainMessages.en },
    ru: { ...russianMessages, ...domainMessages.ru },
    zh: { ...chineseMessages, ...domainMessages.zh },
    es: { ...spanishMessages, ...domainMessages.es },
  };
  const i18nProvider = polyglotI18nProvider(
    (locale) => {
      const localeMessages = messages[locale] ? messages[locale] : messages.en;
      console.log('i18nProvider: polyglotI18nProvider', {locale, localeMessages});
      return localeMessages;
    },
    resolveBrowserLocale()  
  );

  return (
    <Admin dataProvider={dataProvider} i18nProvider={i18nProvider}>
      <Resource
        name="employees"
        list={EmployeeList}
        show={EmployeeShow}
        edit={EmployeeEdit}
        create={EmployeeCreate}
      />
    </Admin>
  );
};

export default App;
