
import { connect } from 'dva';
import styles from './page.less';
import {Button} from 'antd-mobile';
import Example from './components/Example';
            
function App(props) {
    const exampleData = {
        list:props.pageData.list,
        handleClick:() => {
            props.dispatch({
                type: 'list/delete',
                payload: {
                },
            })
        }
    }
    return (
        <div className={styles.normal}>
            <h2>
                {props.pageData.text}
            </h2>
            <Example {...exampleData}/>
            <Button  type="primary" onClick={() => {
                props.dispatch({
                    type: 'list/update',
                });
            }}>点击</Button>
        </div>
    );
}
      
export default connect(state => {
    return {
        pageData: state.list
    };
})(App);
