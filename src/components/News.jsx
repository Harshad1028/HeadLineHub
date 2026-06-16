import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import propTypes from "prop-types";
import Newsitems from "./Newsitems";
import Loading from "./Loading";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const capitalizeFirstletter = (String) => {
    return String.charAt(0).toUpperCase() + String.slice(1);
  };

  const updateNews = async () => {
    props.setprogress(10);
    const Url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
    setloading(true);
    let data = await fetch(Url);
    let parseddata = await data.json();
    setarticles(parseddata.articles);
    setloading(false);
    settotalResults(parseddata.totalResults);
    props.setprogress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstletter(props.category)} - Heading Hub`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const Url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pagesize}`;


    setpage(page + 1);
    let data = await fetch(Url);
    let parseddata = await data.json();

    if (!parseddata.articles || parseddata.articles.length === 0) {
      settotalResults(articles.length); // ટોટલ રીઝલ્ટને કરન્ટ ડેટા જેટલું જ કરી દો જેથી સ્ક્રોલ બંધ થાય
      return;
    }

    setarticles(articles.concat(parseddata.articles));
    settotalResults(parseddata.totalResults);
  };

  // const handlenext = async () => {
  // setpage(page+1);
  //updateNews();
  // };

  //const handleprev = async () => {
  //setpage(page-1);
  //updateNews();
  // };

  return (
    <>
      <h3 className="text-center" style={{ marginTop: "100px" }}>
        HeadLineHub - Top {capitalizeFirstletter(props.category)} Head Lines
      </h3>
      {loading && <Loading />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        // hasMore={articles.length !== totalResults}
        hasMore={articles.length < totalResults && articles.length < 100}
        loader={<Loading />}
      >
        <div className="container">
          <div className="row my-3">
            {!loading &&
              articles.map((element, index) => {
                return (
                  <div className="col-md-4" key={`${element.url}-${index}`}>
                    <Newsitems
                      title={
                        element.title
                          ? element.title.slice(0, 45)
                          : "No Title Available"
                      }
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : "No Description Available"
                      }
                      imgurl={element.urlToImage}
                      newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "us",
  category: "general",
  pagesize: 5,
};

News.propTypes = {
  country: propTypes.string,
  pagesize: propTypes.number,
  category: propTypes.string,
};
export default News;

{
  /* {loading && <Loading />} */
}
{
  /* <div className="d-flex justify-content-between my-3 p-10">
            <button type="button" className="btn btn-success" disabled={page <= 1} onClick={handleprev}>&larr; Previous</button>
            <button type="button" className="btn btn-success"
              disabled={
                page + 1 >
                Math.ceil(totalResults / props.pagesize)
              }
              onClick={handlenext}
            >
              Next &rarr;
            </button>
          </div> */
}

