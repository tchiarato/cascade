Select Cascade Helper
=======
The "Select Cascade" helps you save your time when you are building a dynamic group of dropdowns with dependencies. Configure just like below and have fun.

<pre>
    &lt;select id="select01"&gt;
        &lt;option value=""&gt;Select&lt;/option&gt;
        &lt;option value="01"&gt;Item 01&lt;/option&gt;
        &lt;option value="02"&gt;Item 02&lt;/option&gt;
        &lt;option value="03"&gt;Item 03&lt;/option&gt;
    &lt;/select&gt;

    &lt;select id="select02" data-cascade data-master="select01" data-action="/load/select02"&gt;&lt;/select&gt;
    &lt;select id="select03" data-cascade data-master="select02" data-action="/load/select03"&gt;&lt;/select&gt;
</pre>
<pre>
    &lt;script src="./jquery.cascadeSelect.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript"&gt;
        $(function() {
            var cascade = new Cascade();
            cascade.init();
        });
    &lt;/script&gt;
</pre>