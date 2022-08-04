# **git**
### hay 3 estados donde son: Stage , Commit , server(Push)
---
## *comandos simples*

### Indicar la carpeta
>cd Anotations, cd .. ,cd . , etc

### abrir con Visual Code
>code . , code miarchivo.miextencion , etc

### Indicar la ruta actual
>pwd

### indicar los archivos y carpetas actuales
>dir , ls , ls -a

### crear directorio o carpeta
>mkdir micarpeta

### crear archivo en cmd (no powershell)
>copy pon miarchivo.miextencion

### eliminar archivo o directorio en terminal
>rm miarchivo.miextencion

## renombrar archivos
>mv miarchivo.miextencion miarchivo.miextend

---
# **Etapa Stage**

### añadir achivos creados , borrados o modificados
>git add miarchivo.miextend miarchivo2.miextend ...

### estado de git
>git status
---
# **Comprometer el proyecto**
>git commit -m "first commit"
---
## *restaurar en la etapa stage*
>git restore --stage miarchivo.miextend

## restaurar en toda etapa
>git restaure miarchivo.miextend
---
## renombrar archivos agregados a stage automaticamente
>git mv miarchivo.miextend archivo.miextend

---
---
---
# **archivos como sql o configuraciones en local y .gitignore**
>copy pon .miarchivo

>copy pon .gitignore
## dentro de .gitignore
>.miarchivo

>micarpeta/

---
---
---
# **Viendo estado**
>git status -s

## Viendo estado mas visual
>git diff

>git diff --staged

>git log --oneline

---

# **visualizando rama**
>git branch

## agregando branch y cambiando hacia ramab
>git checkout -b ramab

## vizualizar un archivo en texto
>cat miarchivo

## cambiar de rama
>git checkout main
## *traer cambios de ramab -> main*
>git merge ramab

## borrar rama en local
>git branch -d nelson

## borrar rama en remoto
>git push origin --delete nelson
---


## actualizando en local sobre elremoto
>git fetch origin

## actualizando el local como en el remoto
>git pull origin main