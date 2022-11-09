import styled from 'styled-components'
/* ------------------------------- COMPONENTS ------------------------------- */
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
/* ---------------------------------- HOOKS --------------------------------- */
import useFetch from '../../hooks/useFetch'
import ItemChartContainer from '../../components/chart/ItemChartContainer';
import ItemWidgetContainer from '../../components/widget/ItemWidgetContainer';
import ItemPieChartContainer from '../../components/chart/ItemPieChartContainer';

const Home = () => {

  const { data, loading, reFetch } = useFetch(`/chart/`);

  return (
    <Container className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {/* <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div> */}
        <ItemWidgetContainer/>
        <div className="charts">
          {/* <Featured /> */}
          {/* <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> */}
          <ItemPieChartContainer/>
          <ItemChartContainer/>
        </div>
        {/* <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
      </div>
    </Container>
  );
};
 
export default Home;

const Container = styled.div`
  display: flex;
  .homeContainer {
    flex: 6;

    .widgets,
    .charts {
      display: flex;
      padding: 20px;
      gap: 20px;
    }

    .charts {
      padding: 5px 20px;
    }

    .listContainer {
      -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
      box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
      padding: 20px;
      margin: 20px;

      .listTitle {
        font-weight: 500;
        color: gray;
        margin-bottom: 15px;
      }
    }
  }

`
