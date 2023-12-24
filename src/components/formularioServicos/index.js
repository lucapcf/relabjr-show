import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import styles from "./formularioServicos.module.css"
import { sendContactForm } from "./../../lib/api";
import { FaRegComment, FaRegEnvelope, FaHome } from "react-icons/fa";


export default function formularioServicos(formularios) {

    console.log(formularios)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        await sendContactForm(data);
    }

    return(
        <div className={styles.mainContainer}>
            <h2 className={styles.title}>
                {formularios.tituloServicos}
            </h2>
            <div className={styles.formIconsContainer}>
                <div className={styles.formContainer}>
                    <div className={styles.halfContainer}>
                        <input
                            className={errors?.name && styles.input_error}
                            type="text"
                            placeholder="Nome*"
                            {...register("nome", { required: true })}
                        />
                        {errors?.nome?.type === "required" && (
                            <p className={styles.error_message}>Campo obrigatório</p>
                        )}
                    </div>

                    <div className={styles.halfContainer}>
                        <input
                            className={errors?.email && styles.input_error}
                            type="email"
                            placeholder="E-mail*"
                            {...register("email", {
                                required: true,
                                validate: (value) => isEmail(value),
                            })}
                        />
                        {errors?.email?.type === "required" && (
                            <p className={styles.error_message}>Campo obrigatório.</p>
                        )}

                        {errors?.email?.type === "validate" && (
                            <p className={styles.error_message}>Email invalido</p>
                        )}
                    </div>

                    <div className={styles.halfContainer}>
                        <input
                            className={errors?.name && styles.input_error}
                            type="tell"
                            placeholder="Celular*"
                            {...register("numero", { required: true })}
                        />
                        {errors?.numero?.type === "required" && (
                            <p className={styles.error_message}>Campo obrigatório</p>
                        )}

                        {errors?.numero?.type === "validate" && (
                            <p className={styles.error_message}>Número inválido.</p>
                        )}
                    </div>

                    <div className={styles.halfContainer}>
                        <input
                            className={errors?.name && styles.input_error}
                            type="text"
                            placeholder="Assunto*"
                            {...register("assunto", { required: true })}
                        />
                        {errors?.assunto?.type === "required" && (
                            <p className={styles.error_message}>Campo obrigatório</p>
                        )}
                    </div>

                    <div className={styles.fullContainer}>
                        <textarea
                            className={errors?.name && styles.input_error}
                            type="text"
                            placeholder="Sua mensagem"
                            {...register("mensagem", { required: false })}
                        />
                    </div>

                    <div className={styles.halfContainer}>
                        <button onClick={() => handleSubmit(onSubmit)()}>Enviar</button>
                    </div>
                </div>
                <div className={styles.iconsContainer}>
                    <p className={styles.iconsP}>
                        <FaRegComment className={styles.icons} /> Celular
                    </p>
                    <p className={styles.iconsP}>
                        <FaRegEnvelope className={styles.icons} /> E-mail
                    </p>
                    <p className={styles.iconsP}>
                        <FaHome className={styles.icons} /> Endereço 1 
                    </p>
                    <p className={styles.iconsP}>
                        <FaHome className={styles.icons} /> Endereço 2 
                    </p>
                </div>
            </div>
        </div>
    );

};