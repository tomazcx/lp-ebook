<script setup lang="ts">
	useHead({
	  title: "E-book Fullstack Completo"
	})
</script>

<template>
  <div
    class="text-text min-h-screen py-[73px] px-6 lg:py-36 lg:px-44 flex flex-col gap-36"
  >
    <SectionHomeVue />
    <SectionSummaryVue />
    <SectionTopicsVue />
    <SectionSalaryVue />
    <SectionModulesVue />
    <SectionPlansVue />
    <SectionFaqVue />
    <SectionFooterVue />
    <component is="script">
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js",
      );
      fbq("init", "1231855614852528");
      fbq("track", "PageView");
    </component>
    <noscript
      ><img
        height="1"
        width="1"
        style="display: none"
        src="https://www.facebook.com/tr?id=1231855614852528&ev=PageView&noscript=1"
    /></noscript>
  </div>
</template>

<style>
* {
  scroll-behavior: smooth;
}

body {
  background-color: #13091f;
}
</style>
