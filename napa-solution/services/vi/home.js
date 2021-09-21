import { useQuery } from '@apollo/client';
import { zipToObject } from 'helper/converter';
import generalQueries from 'query/vi/general';

// const FetchIntroService = () => {
//     const { loading: loadingIS, data, error: errorIS } = useQuery(homeQuery.GET_INTRO_SERVICE, {
//         variables: {
//             id: "5fa7acdbac872800220fe474",
//         }
//     });
//     const introService = !loadingIS && !errorIS && zipToObject(data.introService.property, "name", "language");

//     return { loadingIS, introService, errorIS };
// };

const FetchIntroWorks = () => {
  const { loading: loadingIW, data, error: errorIW } = useQuery(
    generalQueries.GET_LAYOUT,
    {
      variables: {
        id: '5fa7acdbac872800220fe474'
      }
    }
  );

  const introWorks =
    !loadingIW &&
    !errorIW &&
    zipToObject(data.layout.property, 'name', 'language');
  return { loadingIW, introWorks, errorIW };
};

const FetchAllWorks = () => {
  const { loading: loadingWorks, data: works, error: errorWorks } = useQuery(
    generalQueries.GET_ALL_SERVICE
  );
  return { loadingWorks, works, errorWorks };
};

const FetchIntroNews = () => {
  const { loading: loadingIN, data, error: errorIN } = useQuery(
    generalQueries.GET_LAYOUT,
    {
      variables: {
        id: '6074fb8e69cce92888cc06c2'
      }
    }
  );
  const introNews =
    !loadingIN &&
    !errorIN &&
    zipToObject(data.layout.property, 'name', 'language');
  return { loadingIN, introNews, errorIN };
};

const FetchAllNews = (limit, offset) => {
  const { loading: loadingNews, data: news, error: errorNews } = useQuery(
    generalQueries.GET_ALL_NEW,
    {
      variables: {
        limit: limit,
        offset: offset
      }
    }
  );
  return { loadingNews, news, errorNews };
};

const FetchAllBanner = (limit) => {
  const {
    loading: loadingBanner,
    data: banners,
    error: errorBanner
  } = useQuery(generalQueries.GET_ALL_BANNER, {
    variables: {
      limit: limit
    }
  });
  return { loadingBanner, banners, errorBanner };
};

const FetchIntroRecruit = () => {
  const { loading: loadingIR, data, error: errorIR } = useQuery(
    generalQueries.GET_LAYOUT,
    {
      variables: {
        id: '6074fd8b69cce92888cc06ca'
      }
    }
  );
  const introRecruit =
    !loadingIR &&
    !errorIR &&
    zipToObject(data.layout.property, 'name', 'language');
  return { loadingIR, introRecruit, errorIR };
};

const FetchAllRecruits = (limit, offset) => {
  const {
    loading: loadingRecruit,
    data: recruits,
    error: errorRecruit
  } = useQuery(generalQueries.GET_ALL_RECRUIT, {
    variables: {
      limit: limit,
      offset: offset
    }
  });
  return { loadingRecruit, recruits, errorRecruit };
};

const FetchDetailRecruit = (id) => {
  const { loading: loadingDR, data: detailRecruit, error: errorDR } = useQuery(
    generalQueries.GET_DETAIL_RECRUIT,
    {
      variables: {
        id: id
      }
    }
  );
  return { loadingDR, detailRecruit, errorDR };
};

export {
  FetchIntroWorks,
  FetchAllWorks,
  FetchIntroNews,
  FetchAllNews,
  FetchIntroRecruit,
  FetchAllRecruits,
  FetchDetailRecruit,
  FetchAllBanner
};
