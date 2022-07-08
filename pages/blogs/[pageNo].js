// how to get blog 1 and bolg 2 page without page creation
// we used "next router"
//for dynamic route we have to use a special file convention that is to use [].(square brackets)
//it is called dynamic routing

import { useRouter } from "next/router"; 


export default function PageNo(){
    const router = useRouter();

    // query parameter
    const pageNumber = router.query.pageNo; //pageNo is a (square bracket) name
    return(
        <div>
            <h1>Hello { pageNumber } page content</h1>
        </div>
    );
};
  
