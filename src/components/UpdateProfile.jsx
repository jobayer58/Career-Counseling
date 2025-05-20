import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const UpdateProfile = () => {
    const { user, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleUpdate = e => {
        e.preventDefault();
        const name = e.target.name.value
        const photo = e.target.photo.value
        const profile = {
            displayName: name,
            photoURL: photo
        }
        updateProfile(auth.currentUser, profile)
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photo });
                navigate('/')
            })
            .catch(error => {
                error.code
            })
    }

    return (
        <div>
            <h1 className="text-center text-[#f44848] text-2xl py-2">If You Want You can update Your Profile Information</h1>
            <div className="flex justify-center items-center py-8 ">
                <div className="card bg-base-100 w-96  max-w-lg shrink-0 shadow-2xl">
                    <form onSubmit={handleUpdate} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#4DC879]">Update Information</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;