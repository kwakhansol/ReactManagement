import './App.css';
import Customer from './components/Customer';
import { Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
 
  width: '100%',
  overflowX: "auto"
  },
  table: {
  minWidth: 1080
  }
  };

const customers =[
  {
    'id':1,
    'image': 'https://placeimg.com/64/64/any',
    'name': '곽한솔',
    'birthday': '921107',
    'gender': '여자',
    'job':'학생'
  },
  {
    'id':2,
    'image': 'https://placeimg.com/64/64/any',
    'name': '김은영',
    'birthday': '921107',
    'gender': '여자',
    'job':'학생'
  },
  {
    'id':3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '조유란',
    'birthday': '921107',
    'gender': '여자',
    'job':'학생'
  }
]

function App(props) {
  const {classes} = props;
  return (
    <Paper className={classes.root} >
      <Table className={classes.table} >
        <TableHead>
          <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
              customers.map(c=>{
                return(
                  <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
                )
              })
            }
                  {/* <Customer
                    id={customers[0].id}
                    image={customers[0].image}
                    name = {customers[0].name}
                    birthday={customers[0].birthday}
                    gender={customers[0].gender}
                    job={customers[0].job}
                  />
                  <Customer
                    id={customers[1].id}
                    image={customers[1].image}
                    name = {customers[1].name}
                    birthday={customers[1].birthday}
                    gender={customers[1].gender}
                    job={customers[1].job}
                  />
                  <Customer
                    id={customers[2].id}
                    image={customers[2].image}
                    name = {customers[2].name}
                    birthday={customers[2].birthday}
                    gender={customers[2].gender}
                    job={customers[2].job}
                  /> */}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
