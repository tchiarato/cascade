Select Cascade Helper
=======
The "Select Cascade" helps you save your time when you are building a dynamic group of dropdowns with dependencies. Configure just like below and have fun.

<pre>
    <select id="select01">
        <option value="">Select</option>
        <option value="01">Item 01</option>
        <option value="02">Item 02</option>
        <option value="03">Item 03</option>
    </select>

    <select id="select02" data-cascade data-master="select01" data-action="/load/select02"></select>
    <select id="select03" data-cascade data-master="select02" data-action="/load/select03"></select>
</pre>
<pre>
    <script src="./jquery.cascadeSelect.js"></script>
    <script type="text/javascript">
        $(function() {
            var cascade = new Cascade();
            cascade.init();
        });
    </script>
</pre>