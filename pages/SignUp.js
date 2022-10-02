import Image from 'next/image';
import Link from 'next/link';

const SignUp = () => {
  return (
    <main className="min-h-screen justify-around flex flex-col max-w-[1500px] mx-auto p-4">
      <section className="">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full text-gray-800">
            <div className="md:w-8/12 lg:w-5/12 p-10 border border-black">
              <div className="pb-4 text-center text-3xl font-extrabold whitespace-nowrap primary-text-color">
                <span className="font-burtons text-center text-3xl sm:text-3xl text-accent-content font-extrabold whitespace-nowrap primary-text-color">
                  <span className="hidden lg:block">
                    THE TWENTY DOLLAR STORE
                  </span>{' '}
                  <span className="lg:hidden">THE $20 STORE</span>
                </span>
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

              <div className="mb-10 font-burtons text-center text-3xl font-extrabold whitespace-nowrap">
                Sign up
              </div>
              <form>
                <div className="flex space-x-4">
                  <div className="mb-6 w-full">
                    <input
                      type="text"
                      className="form-control register-input"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="mb-6 w-full">
                    <input
                      type="text"
                      className="form-control register-input"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control register-input"
                    placeholder="Email address"
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control register-input"
                    placeholder="Password"
                  />
                </div>

                <button
                  type="submit"
                  className="btn glass text-black w-full bg-slate-200 hover:cursor-pointer"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign up
                </button>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>
              </form>
              <div className="p-4 text-sm font-semibold text-slate-800 text-center hover:text-blue-500">
                <Link href="/SignIn">
                  <a>Sign in</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
