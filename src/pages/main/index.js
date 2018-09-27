
import { connect } from 'dva';
import styles from './index.less';
import {Button} from 'antd-mobile';
import Example from './components/Example';
import Link from 'umi/link';
import yay from 'images/yay.jpg';    
function App(props) {
    const exampleData = {
        list:props.pageData.list,
        handleClick:() => {
            props.dispatch({
                type: 'main/delete',
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
                    type: 'main/update',
                });
            }}>点击</Button>
            {
                //这里的width设置成5rem，在iphone6上，刚好是500px，在plus上是552px，
            }
            <img src={yay} alt="" style={{width:'5rem'}}/>
            <br/>
            <Link to="/login">登录页</Link>
            <br/>
            <Link to="/list">列表页</Link>
        </div>
    );
}
      
export default connect(state => {
    return {
        pageData: state.main
    };
})(App);
