import *  as $ from "jquery";

type TWindow = Window & { $: JQueryStatic, jQuery: JQueryStatic };

(window as TWindow).$ = $;
(window as TWindow).jQuery = $;

require("bootstrap-sass");
