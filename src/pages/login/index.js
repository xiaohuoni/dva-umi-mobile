
import { connect } from 'dva';
import styles from './index.less';
import {Button} from 'antd-mobile';
import Example from './components/Example';
import line from 'images/hexagon-line.png';    
import Link from 'umi/link';
function App(props) {
    const exampleData = {
        list:props.pageData.list,
        handleClick:() => {
            props.dispatch({
                type: 'login/delete',
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
            <img src={line} alt="" style={{width:'5rem'}}/>
            <Link to="/main">返回首页</Link>
        </div>
    );
}
      
export default connect(state => {
    return {
        pageData: state.login
    };
})(App);
