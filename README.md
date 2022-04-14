# myWriteFastCoding.js
My own js library that I use to speed up coding.

# Examples

**Ready**

    MJSL().Ready(() => {
	    alert("I am ready");
    }

**Fetch**

    MJSL().Fetch(url, {},
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

    MJSL("div").Loop((data) => {
	    console.log(data);
    });

*Örnek 2:*

    MJSL().Loop((data) => {
	    console.log(data);
    }, [1, 2, 3]);

**Click**

    MJSL("div").Click(
	    (event, me) => {
		    me.style = "background-color: red";
	    }
    );

**Info**

    console.log(MJSL("div").Info());

**Remove**

    MJSL("div").Click(() => {
	    $("div").Remove();
    });
