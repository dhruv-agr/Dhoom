import Head from "next/head";

const About = () => {
    return (
        <>
            <Head>
                <title>About | Video Call App</title>
            </Head>
            <div>
                <h1>About Video Call App</h1>
                <p>Video Call App is a Next.js application that allows users to make video calls with ease.</p>
                <p>
                    Our mission is to provide a seamless video calling experience for everyone, whether it's for personal or
                    professional use.
                </p>
                <p>With Video Call App, you can:</p>
                <ul>
                    <li>Make video calls with up to 10 people at once</li>
                    <li>Share your screen during a call</li>
                    <li>Record your calls for future reference</li>
                </ul>
                <p>Thank you for choosing Video Call App for your video calling needs!</p>
            </div>
        </>
    );
};

export default About;
