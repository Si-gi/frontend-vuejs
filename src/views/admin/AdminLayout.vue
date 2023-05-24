<template>
    <div class="public">
        <AdminNav/>
        <AdminHeader/>
        <router-view/>
    </div>
</template>

<script>
import AdminNav from '@/components/admin/AdminNav.vue';
import AdminHeader from '@/components/admin/AdminHeader.vue';
export default {
    name: "AdminLayout",
    components: { AdminNav, AdminHeader }
}
</script>
<style>
    .public {
        border: solid
    }
</style>