import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { getAll } from "../services/api-client";
import ms from "ms";

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () =>getAll('/platforms/lists/parents'),
            staleTime: ms("24h"), //24H
            initialData: platforms    
});

export default usePlatforms;