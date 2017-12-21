# Front-end Test Task
## Task

Develop SPA which should manage merchants. A user can interact with:
 - list of merchants (better with pagination)
 - adding merchant (redux-form is allowed but not required)
 - merchant editing
 - merchant removing
 - sorted history of bids for each merchant

Front-end part should be developed as SPA with ES6, React and Redux.
You can also use TypeScript to develop this task, but it is not required
Back-end API should be mocked.

## Data structure example
Bid {
  id: string,
  carTitle: string,
  amount: number,
  created: string
}

Merchant {
  id: string,
  firstname: string,
  lastname: string,
  avatarUrl: string,
  email: string,
  phone: string,
  hasPremium: boolean,
  bids: Array<Bid>
}

## Seed link
https://github.com/auto1-oss
