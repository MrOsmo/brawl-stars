namespace BRAWLERSSTORE {
  type IBrawlers = {
    items: [
      {
        gadgets: [
          {
            name: {},
            id: number
          }
        ],
        name: {},
        id: number,
        starPowers: [
          {
            name: {},
            id: number
          }
        ]
      }
    ]
  }

  type IEvent = {
    event: {
      id: number;
      mode: string;
      map: string;
    }
  }

  type GetBrawlersResponse = IBrawlers[];
  type GetBrawlersRequest = string;


  type GetEventsResponse = IEvent[];
  type GetEventsRequest = string;
}