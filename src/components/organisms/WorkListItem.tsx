import { createFragmentContainer, graphql } from "react-relay";
import { WorkListItem_article } from "src/__generated__/WorkListItem_article.graphql";

type Props = {
  article: WorkListItem_article;
};

const WorkListItem: React.FC<Props> = (props) => {
  return (
    <>
      <li>
        <div className="box">
          <h5>{props.article.subject}</h5>
          <p>{props.article.description}</p>
        </div>
      </li>
      <style jsx>{`
        p {
          white-space: pre-wrap;
        }
      `}</style>
    </>
  );
};

export default createFragmentContainer(WorkListItem, {
  article: graphql`
    fragment WorkListItem_article on Article {
      id
      subject
      description
      link
      linkLabel
      pcImage
    }
  `,
});
