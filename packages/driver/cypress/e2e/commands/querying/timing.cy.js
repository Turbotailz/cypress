describe('src/cy/commands/querying', () => {
  beforeEach(() => {
    cy.visit('/fixtures/dom.html')
  })

  it('should go fast', () => {
    for (let i = 0; i < 500; i++) {
      cy.get('#button').as(`a${ i}`)
    }
    for (let i = 0; i < 500; i++) {
      cy.get(`@a${ i}`).should('exist')
    }
  })
})

// new (no log except assertion)
// 9s, 262.3 mb

// old (no log except assertion)
// 9s

/*
beforeEach(() => {
  cy.visit('/fixtures/dom.html')
})

it('should go fast', () => {
  for (let i = 0; i < 500; i++) {
    cy.get('#button').as('a' + i)
  }
  for (let i = 0; i < 500; i++) {
    cy.get('@a' + i).should('exist')
  }
})
 */

// old with logs
// 68s, 1021
// 70s, 1400
// 74s, 1600

// new with logs
// 67s, 840
// 69s, 1200
// 70s, 1600

/*
beforeEach(() => {
  cy.visit('/fixtures/dom.html')
})

it('should go fast', () => {
  for (let i = 0; i < 500; i++) {
    cy.get('#button', {log: false}).as('a' + i)
  }
  for (let i = 0; i < 500; i++) {
    cy.get('@a' + i, {log: false}).should('exist')
  }
})
*/

// old, without logs
// 9s, 379mb
// 9s, 550
// 9s, 580

// new without logs
// 9s, 500mb
// 9s, 560
// 9s, 600
