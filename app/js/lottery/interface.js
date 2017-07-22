/**
 * Created by zhang on 7/7/2017.
 */

import  $ from "jquery";

class Interface{
    getOmit(issue){
        let self = this
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/omit',
                date:{
                    issue:issue
                },
                dateType:'json',
                success:function (res) {
                    self.setOmit(res.data);
                    resolve.call(self,res);
                },
                error:function (err) {
                    reject.call(err);
                }
            })
        })
    }
    
    getOpenCode(issue){
        let self = this;
        return new Promise((reslove,reject)=>{
            $.ajax({
                url:'/get/opencode',
                date:{
                    issue:issue
                },
                dateType:'json',
                success:function (res) {
                    self.setOpenCode(res.data)
                    resolve.call(self,res);
                },
                error:function (err) {
                    reject.call(err);
                }
            })
        })
    }
    
    getState(issue){
        let self = this;
        return new Promise((reslove,reject)=>{
            $.ajax({
                url:'/get/state',
                date:{
                    issue:issue
                },
                dateType:'json',
                success:function (res) {
                    resolve.call(self,res);
                },
                error:function (err) {
                    reject.call(err);
                }
            })
        })
    }
    
}


export default Interface;
