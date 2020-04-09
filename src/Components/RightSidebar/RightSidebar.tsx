import * as React from "react";
import { getEntertainment } from "../../Actions/Actions";
import { connect } from "react-redux";
import "./RightSidebar.scss";

export interface RightSidebarProps {
  entertainment: any | null;
  getEntertainment: typeof getEntertainment;
}

export interface State {}

class RightSidebar extends React.Component<RightSidebarProps, State> {
  keyAPI: string = "74498e6f023d4358a296a9351a1ea043";
  componentDidMount() {
    if (this.props.entertainment === null) {
      this.props.getEntertainment(
        `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${this.keyAPI}`
      );
    }
  }

  render() {
    return (
      <div>
        <h3 className="text-start mb-4">
          <mark>Just in</mark>
        </h3>
        {this.props.entertainment !== null
          ? this.props.entertainment.articles.map(
              (article: any, i: number | string) => (
                <div key={i} className="d-flex article_right_sidebar  mb-2">
                    <img src={article.urlToImage} className="" alt="" />
                    <div>{article.description}</div>
                </div>
              )
            )
          : null}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    entertainment: state.data_news.entertainment,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getEntertainment: (url: string) => dispatch(getEntertainment(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RightSidebar);
