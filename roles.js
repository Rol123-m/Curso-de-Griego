// Datos de usuarios y sus roles
const users = [
    { id: "1", name: "Alejandro Foubelo", role: "student" },
    { id: "2", name: "Alexei Lores Lamorú", role: "student" },
    { id: "3", name: "Ana Margarita Concepción Noa", role: "student" },
    { id: "4", name: "Daniel Ramirez", role: "student" },
    { id: "5", name: "Jaider Portales Díaz", role: "student" },
    { id: "6", name: "Jeremias Cifuentes Lastre", role: "student" },
    { id: "7", name: "Jose A. Cantillo", role: "student" },
    { id: "8", name: "Laura Montero Gandol", role: "student" },
    { id: "9", name: "Leonard Carrera", role: "student" },
    { id: "10", name: "Maikel Molina Figueredo", role: "student" },
    { id: "11", name: "Marcos González", role: "student" },
    { id: "12", name: "María C. Grave de Peralta Concepción", role: "student" },
    { id: "13", name: "Mario Mondeja Leyva", role: "student" },
    { id: "14", name: "Marlon R.", role: "student" },
    { id: "15", name: "Midel Pileta", role: "student" },
    { id: "16", name: "Miguel Torres Morera", role: "student" },
    { id: "17", name: "Orlando Aguilar Fonseca", role: "student" },
    { id: "18", name: "Orlei", role: "student" },
    { id: "19", name: "Raidel Verdecia", role: "student" },
    { id: "20", name: "Raydel Ramón Toranzo Hidalgo", role: "student" },
    { id: "21", name: "Roleydis Cantillo Furones", role: "student" },
    { id: "22", name: "Samuel Gonzalez", role: "student" },
    { id: "23", name: "Yanet González Tamayo", role: "student" },
    { id: "24", name: "Yordanka Álvarez Pérez", role: "student" },
    { id: "25", name: "Rolando Desdín", role: "admin" }
];

// Función de login global para ser accesible desde otros archivos
window.login = function(userId) {
    const user = users.find(u => u.id === userId);
    if (user) {
        localStorage.setItem('authenticated', 'true');
        localStorage.setItem('userRole', user.role);
        localStorage.setItem('userName', user.name);
        localStorage.setItem('userId', user.id);
        
        // Guardar inicial del nombre para el círculo de usuario
        const userInitial = user.name.trim().charAt(0).toUpperCase();
        localStorage.setItem('userInitial', userInitial);
        
        return true;
    }
    return false;
};