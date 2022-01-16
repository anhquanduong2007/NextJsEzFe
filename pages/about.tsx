import { useRouter } from 'next/router';
import * as React from 'react';

export interface AboutPageProps { }

export default function AboutPage(props: AboutPageProps) {
    const router = useRouter();
    console.log("About query", router.query);
    React.useEffect(() => {
        // check query available 
    }, [])
    return (
        <div>
            About Page
        </div>
    );
}
export function getServerSideProps() {
    return {
        props: {}
    }
}
