import { useMemo } from 'react'
import { Environment, Network, RecordSource, Store, Observable } from 'relay-runtime'

let relayEnvironment

async function fetchRelay(operation, variables) {

    const response = await fetch('https://coqzo.herokuapp.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "publicWebsiteToken": process.env.NEXT_PUBLIC_WEBSITE_TOKEN
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    });

    return await response.json();
}


function createEnvironment(initialRecords) {
  return new Environment({
    network: Network.create(fetchRelay),
    store: new Store(new RecordSource()),
  })
}

export function initEnvironment(initialRecords) {
  const environment = relayEnvironment ?? createEnvironment(initialRecords)

  if (initialRecords) {
    environment.getStore().publish(new RecordSource(initialRecords))
  }
  if (typeof window === 'undefined') return environment
  if (!relayEnvironment) relayEnvironment = environment

  return relayEnvironment
}

export function useEnvironment(initialRecords) {
  const store = useMemo(() => initEnvironment(initialRecords), [initialRecords])
  return store
}
