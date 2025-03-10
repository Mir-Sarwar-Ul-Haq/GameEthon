import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres"
import { getAll } from "../services/api-client";
import ms from 'ms'

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => getAll('/genres'),
    staleTime: ms("24h"), //24H
    initialData: genres

})

export default useGenres;