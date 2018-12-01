<template>
    <div class="table container">
        <table class="table is-bordered">
            <thead>
                <tr>
                    <th v-for="(attr,index) in userAttribute" :key="index">{{attr}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user,index) in usersData" :key="index">
                    <td>{{user.id}}</td>
                    <td>{{user.firstName}}</td>
                    <td>{{user.lastName}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.item}}</td>
                    <td>{{user.quantity}}</td>
                    <td>{{user.totalPrice}}</td>
                </tr>
            </tbody>
        </table>
        <button v-if="this.hidebutton == true" @click="pivotUser" class="button" type="button">Pivot</button><br><br>
        <table v-if="this.pivot ==true" class="table is-bordered">
            <thead>
                <tr>
                    <th>Fullname</th>
                    <th>Email</th>
                    <th v-for="(item,index) in pivotHeader" :key="index">{{item}}</th>
                </tr>
            </thead>
            <tbody>
                    
                <tr v-for="(user,index) in mixedData" :key="index">
                    <td>{{user.fullname}}</td>
                    <td>{{user.email}}</td>
                    <td v-for="(value,key,index) in user.pivotusers" :key="index">{{value}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            usersData:[],
            userAttribute:[],
            itemsData:[],
            pivotHeader:[],
            pivot:false,
            pivotDataFullname:[],
            pivotDataEmail:[],
            sortedUser:[],
            pivotData:[],
            mixedData:[],
            hidebutton:true
        }
    },
    created:function(){
        this.getUsers()
    },
    methods:{
        getUsers(){
            axios.get('http://localhost:5000/users/')
            .then(({data})=>{
                this.usersData = data
                this.mixedData.push(data)
                for(var key in data[0]){
                    if(data[0].hasOwnProperty(key)){
                        this.userAttribute.push(key)
                    }
                }
            })
            .catch(err=>{
                console.log(err)
            })
        },
        pivotUser(){
          console.log("LENGTH USER DATA",this.usersData.length)
            function compare(a,b) {
                if (a.firstName < b.firstName)
                    return -1;
                if (a.firstName > b.firstName)
                    return 1;
                return 0;
            }
            this.sortedUser = this.usersData.sort(compare)
            console.log("LENGTH SORTED USER",this.sortedUser.length)
            axios.get('http://localhost:5000/users/dynamicpivot')
            .then(({data})=>{
                for( var key in data[0][0].pivotusers){
                    if(data[0][0].pivotusers.hasOwnProperty(key)){
                        this.pivotHeader.push(key)
                    }
                }
                let newArr =[]
                console.log(this.sortedUser[0].firstName)
                console.log("DATA LENGTH",data[0].length)
                console.log("DATA",data[0])
                console.log("SORTED USER LENGTH",this.sortedUser.length)
                for(var i=0; i<data[0].length; i++){
                    let newObj = {}
                    newObj = data[0][i]
                    newObj['fullname'] = this.sortedUser[i].firstName + " " + this.sortedUser[i].lastName
                    newObj['email'] = this.sortedUser[i].email
                    newArr.push(newObj)
                }

                this.mixedData = newArr
                this.pivotData = data[0]
                this.pivot = true
                this.hidebutton = false
            })
        }
    }

}
</script>

<style>
table{
    margin-bottom: 40px;
}

</style>
