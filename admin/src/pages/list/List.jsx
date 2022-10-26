import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from "styled-components"

const List = ({columns}) => {
  return (
    <Container className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable columns={columns}/>
      </div>
    </Container>
  )
}

export default List

const Container = styled.div`
  display: flex;
  width: 100%;
  .listContainer {
    flex: 6;
  }
`