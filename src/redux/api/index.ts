import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQyZWVkNjQ4LWFlOWQtNDFjOC05ZGQ5LTViYjlhYzkwYTk1OCIsImlhdCI6MTcyMzU0MjI4NSwic3ViIjoiZGV2ZWxvcGVyLzE5NWY1MGNlLTQ2ZTgtNGU0NS1jOThhLTJkM2NjYzRkNTIyNiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTg1LjExNy4xNDguNzEiXSwidHlwZSI6ImNsaWVudCJ9XX0.RsczVAAN76Qis-pwU1yhaNcPwmGcvv34LrIFmsQfurYy0z_KQP941dvb6HbPL1pSKfK3CKrFxvzaCOcbiHwsfg"

export const brawlersApi = createApi({
  reducerPath: 'brawlersApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getBrawlers: builder.query<
      BRAWLERSSTORE.GetBrawlersResponse,
      BRAWLERSSTORE.GetBrawlersRequest
    >({
      query: () => ({
        url: 'brawlers',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    getEvents: builder.query<
      BRAWLERSSTORE.GetEventsResponse,
      BRAWLERSSTORE.GetEventsRequest
    >({
      query: () => ({
        url: 'events/rotation',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
})

export const {
  useGetBrawlersQuery,
  useGetEventsQuery
} = brawlersApi
