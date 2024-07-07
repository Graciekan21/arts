import { axiosReq } from "../api/axiosDefaults";

export const fetchMoreData = async (resource, setResourc) => {
    try {
        const { data } = await axiosReq.get(resource.next);
        setResourc((prevResource) => ({
          ...prevResource,
          next: data.next,
          results: data.results.reduce((acc, cur) => {
            return acc.some((accResult) => accResult.id === cur.id)
              ? acc
              : [...acc, cur];
          }, prevResource.results),
        }));
      } catch (err) {}
    };