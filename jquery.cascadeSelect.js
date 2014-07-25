(function (window, undefined) {

    var $currentSelect, self;

    function Cascade() {

        self = this;

        this.init = function () {
            $('select[data-cascade]').each(function (index, el) {
                var $el = $(el);
                var master = $(el).data('master');
                var url = $(el).data('action');

                $el.attr('disabled', true);

                $(document).on('change', '#' + master, function () {
                    var value = $(':selected', this).val();
                    $currentSelect = $el;

                    if (value && value !== undefined && value !== "" && value !== 0)
                        $.get(url, { id: value }, self.done);
                    else
                        self.reset($(this));
                });
            });
        }

        this.reset = function ($el) {
            var $master = $el || $currentSelect;
            var $select = $('select[data-master="' + $master.prop('id') + '"]');

            $select.empty();
            $select.attr('disabled', true);

            $select.trigger('change');
        }
    }

    Cascade.prototype.done = function (res) {

        $currentSelect.empty();
        res.forEach(Cascade.prototype.assemble);
        self.reset();
    }

    Cascade.prototype.assemble = function (element, index) {

        $currentSelect.append('<option value="' + element.Value + '">' + element.Text + '</option>');
        $currentSelect.removeAttr('disabled');
    }

    window.Cascade = Cascade;
})(window);