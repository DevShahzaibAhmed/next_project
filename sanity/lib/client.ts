import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn, token } from '../env'

export const Readclient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export const Writeclient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
})
