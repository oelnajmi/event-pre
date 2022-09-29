import Image from 'next/image';

const SignUp = () => {
  return (
    <main className="min-h-screen justify-around flex flex-col max-w-[1500px] mx-auto p-4">
      <section class="">
        <div class="container px-6 py-12 h-full">
          <div class="flex justify-center items-center flex-wrap h-full text-gray-800">
            <div class="md:w-8/12 lg:w-5/12 p-10 border rounded-lg">
              <div className="pb-4 text-center text-3xl font-extrabold whitespace-nowrap primary-text-color">
                EventPre
              </div>
              <div className="pb-4 text-center text-3xl font-extrabold whitespace-nowrap primary-text-color">
                <Image
                  className="items-center mx-auto"
                  src="/undraw_going_up_re_86kg.svg"
                  alt="Vercel Logo"
                  width={100}
                  height={100}
                />
              </div>

              <div className="mb-10 text-center text-3xl font-extrabold whitespace-nowrap">
                Sign up
              </div>
              <form>
                <div className="flex space-x-4">
                  <div class="mb-6">
                    <input
                      type="text"
                      class="form-control register-input"
                      placeholder="First Name"
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="text"
                      class="form-control register-input"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    class="form-control register-input"
                    placeholder="Email address"
                  />
                </div>

                <div class="mb-6">
                  <input
                    type="password"
                    class="form-control register-input"
                    placeholder="Password"
                  />
                </div>

                <button
                  type="submit"
                  class="inline-block text-white w-full primary-bg-color button-shape"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
