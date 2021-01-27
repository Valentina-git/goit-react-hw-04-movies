import styled from 'styled-components';

const CastStyled = styled.div`
  .castList {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
  }
  .castListItem {
    overflow: hidden;
    margin-right: 15px;
    margin-bottom: 15px;
    width: 220px;
    border: 1px solid lightgrey;
    border-radius: 10px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .castImg {
    margin: 0 auto;
    height: 175px;
    width: 138px;
  }
  .castTitle {
    text-align: center;
  }
  .castText {
    text-align: center;
    color: grey;
  }
`;

export default CastStyled;
