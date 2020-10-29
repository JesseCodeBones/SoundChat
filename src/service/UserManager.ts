export class UserManager{

    private static userMap:Array<any> = [
        {username:"huoshi", password:"christian",isadmin:true},
        {username:"audience", password:"christian",isadmin:false}
    ];

    public static checkAuthority(username:string, password:string):string{

        for(let setting of this.userMap) {
            if(setting["username"]==username && setting["password"]==password) {
                if(setting["isadmin"]){
                    return "manager";
                } else {
                    return "audience";
                }
            }
        }

        return "failed"
    }
}