import { Helmet } from "react-helmet";

const Layout = ({
    title,
    description,
    children
}) => {
    return (
        <>
            <Helmet>
                <title>
                    {title}
                </title>
                <meta name="description" content={description} />
                <meta name="author" content="Manav" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://example.com/portfolio-thumbnail.jpg" />
                <meta property="og:url" content="https://manv-portfolio.com" />;

                Layout.prip
            </Helmet>
            <main>{children}</main>
        </>
    )
};

Layout.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default Layout;