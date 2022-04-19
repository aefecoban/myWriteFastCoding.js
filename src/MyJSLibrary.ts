class MyJSLibrary{
    select: Array<HTMLElement>;
    data2waybindingString: String;
    props: Object;

    constructor(select :any){
        
        this.select = [];

        if(typeof(select) == typeof("")){
            try {
                let buff = document.querySelectorAll(select);
                buff.forEach((el) => {
                    this.select.push(el)
                });
            } catch (error) {
            }
        }
    }

    Ready(f :Function){
        if (document.readyState != 'loading'){
            f();
        } else {
            document.addEventListener('DOMContentLoaded', (event) => {
                f(event);
            });
        }
        return this;
    }

    Fetch(url:string, methods:Object = {}, functionInLoadingPhase:Function = null, functionThenLoading:Function = null, functionErrorLoading:Function = null){

        if(functionInLoadingPhase){
            functionInLoadingPhase();
        }

        fetch(url, methods).then((data:any) => {
            if(functionThenLoading){
                functionThenLoading(data);
            }
        }).catch((data) => {
            if(functionErrorLoading){
                functionErrorLoading(data);
            }
        });

        return this;

    }

    Html(data :string | null){
        if(data == null){
            return  this.select.length == 0 ? undefined : 
                        (this.select.length == 1) ? this.select[0].innerHTML : 
                            [...this.select.map(element => {
                                return element.innerHTML;
                            })];
        }else{
            if(this.select.length == 1){
                this.select[0].innerHTML = data;
            }else if(this.select.length > 1){
                this.select.map(element => {
                    element.innerHTML = data;
                });
            }
        }
        return this;
    }

    Loop(callback:Function, ar:Array<any>|null){
        if(ar == null){
            this.select.map((element) => {
                callback(element);
            });
        }else{
            ar.map((element) => {
                callback(element);
            });
        }
    }

    Click(callback:Function){
        if(this.select.length > 0){
            this.select.map(element =>  {
                element.addEventListener("click", (event) => {
                    callback(event, element);
                });
            })
        }
    }

    Info(){
        return (this.select.length == 0) ? undefined : 
            [...(this.select.map(element => {
                let s = element.getBoundingClientRect();
                return s;
            }))];
    }

    Attr(whichAttr :String, newValue :String|null = null){
        if(newValue == null){
            return (this.select.length == 0) ? undefined : 
            [...(this.select.map(element => {
                let s = element.getAttribute(whichAttr.toString()) ?? "NULL";
                return s;
            }))];
        }else{
            return (this.select.length == 0) ? undefined : 
            [...(this.select.map(element => {
                element.setAttribute(whichAttr.toString(), newValue.toString());
                return newValue;
            }))];
        }
    }

    Rattr(whichAttr :String){
        this.select.map((element) => {
            if(element.getAttribute(whichAttr.toString()) !== undefined){
                element.removeAttribute(whichAttr.toString());
            }
        });
    }

    Remove(){
        this.select.map(element => {
            try{
                element.remove();
            }catch(error){}
        });
        return this;
    }
}

function MJSL(select:any){
    return new MyJSLibrary(( typeof(select) == typeof("") ) ? select : null );
}
