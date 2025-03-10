import { useInfiniteQuery } from "@tanstack/react-query";
import { getAll } from "../services/api-client";
import ms from "ms";

const useGames = (gameQuery) =>
    useInfiniteQuery({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) =>
            getAll('/games', {
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam
                }
            }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: ms("24h"), //24H

    })
// useData("/games", {
//     params: {
//         genres: gameQuery.genre?.id,
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText
//     }
// },
//     [gameQuery]);

export default useGames;