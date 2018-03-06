import { observable, action, computed, runInAction  } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Get } from '../utils/request';

class Home {
    @observable count = 0;
    @observable asyncData = '';
    @observable result = '';
    @computed get asyncDataResult(){
        return '获取数据'+this.result;
    }

    @action add = (data)=>{
        console.log('test mobx args-->',data)
        this.count++;
    }

    @action changeResult= ()=>{
        this.result = '成功';
    }

    @action getAsyncData = async()=>{
        const data = await Get('/api/home_data');
        runInAction("get async data", () => {
            this.asyncData = data.username;
            this.changeResult();
        })
    }
}

const homeStore = new Home();
export {homeStore};