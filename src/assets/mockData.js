import faker from 'faker'

function getItems (len) {
  let items = []
  while(len--) {
    items.push({
      name: faker.lorem.word(),
      age: faker.random.number({ min: 10, max: 50 }),
      address: faker.address.streetAddress()
    })
  }
  return items
}

export const data1 = getItems(faker.random.number({ min: 10, max: 100 }))
export const data2 = getItems(faker.random.number({ min: 10, max: 100 }))
export const data3 = getItems(faker.random.number({ min: 10, max: 100 }))
