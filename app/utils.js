import _ from 'lodash'

/* ==================================================
  DATA TRANSFORMS

// I decided to use lodash library to handle filter, sort and shuffle since this library provides
// useful methods to handle this type of things.
***************************************************/

export const getLastName = (fullName) => fullName.match(/\w+/g)[0]

export const getFirstName = (fullName) => fullName.match(/\w+/g)[0]

export const filterByName = (searchForName, personList) => personList.filter((person) => person.firstName.match(searchForName))

export const sortByFirstName = (personList) => _.sortBy(personList, (person) => person.firstName)

export const sortByLastName = (personList) => _.sortBy(personList, (person) => person.lastName)

export const shuffleList = (list) => _.shuffle(list)

