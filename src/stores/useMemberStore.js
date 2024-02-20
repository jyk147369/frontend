import { defineStore } from "pinia";
import axios from "axios";
import { toRaw } from "vue";

const backend = "http://"+process.env.VUE_APP_BACKEND_URL+"/api";

export const useMemberStore = defineStore("member", {
  state: () => ({ isLoading: false, isLoggedIn: false }),
  actions: {
    async login(memberLogin) {
      this.isLoading = true;
      try {
        let response = await axios.post(
          backend + "/member/login",
          toRaw(memberLogin)
        );
        if (response.status === 200 && response.data.accessToken != null) {
          sessionStorage.setItem("atoken", response.data.accessToken);

          this.isLoggedIn = true;
  
          return true;
        }
      } catch (e) {
        console.log(e);
        return false;
      } finally {
        this.isLoading = false;
      }
      return false;
    },
    async signup(memberSignup) {
      this.isLoading = true;
      try {
        let response = await axios.post(
          backend + "/member/signup",
          toRaw(memberSignup)
        );
        this.isLoading = false;

        if (response.status === 200 && response.data.isSuccess === true) {
          return true;
        }
      } catch (e) {
        return false;
      } finally {
        this.isLoading = false;
      }
      return false;

    },
  },
});
