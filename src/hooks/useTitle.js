import { useEffect } from "react";


const useTitle = title =>{
    useEffect(() => {
        document.title = `Tools Sharing - ${title}`;
    }, [title]);
}

export default useTitle;
