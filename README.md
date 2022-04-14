# myWriteFastCoding.js
My own js library that I use to speed up coding.

# Examples

**Ready**

    MJSL().Ready(() => {
	    alert("I am ready");
    }

**Fetch**

    $().Fetch(url, {},
        () => {
            main.innerHTML = "LOADİNG";
        },
        async (data) => {
            data.json().then((d) => main.innerHTML = JSON.stringify(d));
        },
        (data) => {
            console.log(data);
        }
    );

**Loop**

*Örnek 1:*

    $("div").Loop((data) => {
	    console.log(data);
    });

*Örnek 2:*

    $().Loop((data) => {
	    console.log(data);
    }, [1, 2, 3]);

**Click**

    $("div").Click(
	    (event, me) => {
		    me.style = "background-color: red";
	    }
    );

**Info**

    console.log($("div").Info());

**Remove**

    $("div").Click(() => {
	    $("div").Remove();
    });
